import { Status } from '@shared/enums/status.enum';
export class BookEntity {
  constructor(
    private readonly id: string,
    private title: string,
    private author: string,
    private imageUrl: string,
    private status: Status,
    private comment: string,
  ) {
    this.renameTo(title);
    this.changeStatus(status);
    this.updateCoverImage(imageUrl);
  }
  renameTo(title: string): void {
    if (title.trim() === '') throw new Error('Title must not empty');
    this.title = title;
  }
  updateCoverImage(imageUrl: string): void {
    if (imageUrl === '') throw new Error('Image Url must not empty');
    this.imageUrl = imageUrl;
  }
  changeStatus(status: Status): void {
    if (!Object.values(Status).includes(status))
      throw new Error('Invalid status');
    this.status = status;
  }
  getTitle(): string {
    return this.title;
  }
  getAuthor(): string {
    return this.author;
  }
  getImageUrl(): string {
    return this.imageUrl;
  }
  getId(): string {
    return this.id;
  }
  getStatus(): Status {
    return this.status;
  }
}
