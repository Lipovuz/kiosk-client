<?php
namespace App\ProductExecutors\Email;

use Illuminate\Mail\Mailable;
use Intervention\Image\Image;

class EmailBrandFullPhotoMessage extends Mailable
{
    private Image $image;
    private string $fileName;
    private string $imageType = 'png';

    public function __construct(Image $image, string $fileName)
    {
        $this->image = $image;
        $this->fileName = $fileName;
    }

    /**
     * @return EmailBrandFullPhotoMessage
     */
    public function build(): Mailable
    {
        return $this->view('emails.products.brand-full-photo-message')
            ->attachData(
                $this->image->stream($this->imageType)->getContents(),
                $this->fileName . ".$this->imageType",
                [
                    'mime' => "image/$this->imageType",
                ]
            );
    }
}
