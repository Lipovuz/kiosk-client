<?php
namespace App\Db\Criteria\Kiosk;

use App\Db\Models\Kiosk\Kiosk;
use App\Db\Models\User;
use App\Reference\Kiosk\KioskStatusReference;
use App\Reference\User\Permissions\AbstractDataPermission;
use App\Reference\User\Permissions\Definitions\AccessKioskEdit;
use App\Reference\User\Permissions\Definitions\AccessKioskView;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractCriteria;

/**
 * Class KioskCriteria
 */
class KioskCriteria extends AbstractCriteria
{
    protected static function getModelClass(): string
    {
        return Kiosk::class;
    }

    /**
     * @param int $id
     * @return KioskCriteria
     */
    public function byId(int $id): self
    {
        $this->where(['id' => $id]);
        return $this;
    }

    /**
     * @param string $identity
     * @return KioskCriteria
     */
    public function byIdentity(string $identity): self
    {
        $this->where(['identity' => $identity]);
        return $this;
    }

    /**
     * @return KioskCriteria
     */
    public function statusActive(): self
    {
        $this->where(['status' => KioskStatusReference::ACTIVE]);
        return $this;
    }

    /**
     * Условие - только разрешенный к просмотру
     * @param User $user
     * @return KioskCriteria
     */
    public function canViewUser(User $user): self
    {
        return $this->canUser($user, AccessKioskView::NAME);
    }

    /**
     * Условие - только разрешенный к изменению
     * @param User $user
     * @return $this
     */
    public function canEditUser(User $user): self
    {
        return $this->canUser($user, AccessKioskEdit::NAME);
    }

    /**
     * @param User $user
     * @param string $permissionName
     * @return $this
     */
    private function canUser(User $user, string $permissionName): self
    {
        if ($permission = $user->permissions()->where('name', $permissionName)->first()) {
            $permission = $permission->getPermissions();
        } else {
            // запрещено все
            $this->whereIn('id', [0]);
            return $this;
        }
        if (in_array(AbstractDataPermission::ALL_ITEMS_KEY, $permission->getData())) {
            // разрешено все
            return $this;
        }
        $this->whereIn('id', array_values($permission->getData()));
        return $this;
    }
}
