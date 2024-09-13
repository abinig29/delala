export interface IProduct {
    id: string;
    productName: string;
    category: string;
    subcategory: string;
    price: string;
    status: ProductStatus
    createdAt: Date
}

export enum ProductStatus {
    Sold = "Sold",
    Available = "Available",
}


export enum InquiryStatus {
    Answered = "Answered",
    Unanswered = "Unanswered",
}

// Interface for Inquiry
export interface Inquiry {
    id: string;
    customer: string;
    productName: string;
    phoneNumber: string;
    inquiryDate: string;
    status: InquiryStatus;
    createdAt: Date
}