export class PaginationHelper {

    public page = 1;
    public pageSize = 10; // default page size
    public collectionSize: number;
    public originalItems: any[];
    public pageItems: any[];

    constructor() {

    }

    public initPageHelper(totalItems: any[], defaultPageSize?: number) {
        this.originalItems = totalItems;
        if (this.originalItems) {
            this.collectionSize = this.originalItems.length;
            if (defaultPageSize) {
                this.pageSize = defaultPageSize;
            }
            this.pageItems = this.originalItems.slice(0, 1 * this.pageSize);
            this.page = 1;
        } else {
            this.collectionSize = 0;
            this.pageItems = [];
        }
    }

    public updateItems(totalItems: any[]) {
        this.originalItems = totalItems;
        this.pageChange(1);
    }

    public getCurrentItems() {
        return this.originalItems;
    }

    public setPage(currentPage: number) {
        this.page = currentPage;
    }

    public setPageSize(pageSize: number) {
        this.pageSize = pageSize;
    }

    public pageSizeChange(value: number) {
        this.pageSize = value;
        this.page = 1;
        if (this.originalItems) {
            this.pageItems = this.originalItems.slice(0, 1 * this.pageSize);
        }
    }

    public pageChange(currentPage: number) {
        if (this.originalItems) {
            this.pageItems = this.originalItems.slice((currentPage - 1) * this.pageSize, currentPage * this.pageSize);
        }
    }

}