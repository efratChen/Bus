export class Item {
   constructor(categoryId: number, description: string, foundInLine: number, phone: string) {
      this.categoryId = categoryId;
      this.description = description;
      this.foundInLine = foundInLine;
      this.phone = phone;
   }
   categoryId: number;
   description: string;
   foundInLine: number;
   phone: string;
}
