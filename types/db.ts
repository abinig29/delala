
export enum InquiryStatus {
    PENDING = "PENDING",
    ANSWERED = "ANSWERED"
}

// Interface for Inquiry

export interface IInquiry {
    id: string;
    name: string;
    phone: string;
    email: string;
    note: string;
    status: InquiryStatus
    productId: string,
    product: IProduct;
    createdAt: Date;
    updatedAt: Date;
}

export interface INotification {
    id: number
    title: string
    description: string
    time: string
}


export enum ProductStatus {
    DRAFT = "DRAFT",
    ACTIVE = "ACTIVE",
    ARCHIVE = "ARCHIVE"
}

export enum ProductCategory {
    PROPERTY = 'PROPERTY',
    VEHICLE = 'VEHICLE',
    JOB = 'JOB',
    SERVICE = 'SERVICE',
    CLASSIFIED = 'CLASSIFIED',
}

export enum AdminStatus {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}


export interface IService {
    id: string
    name: string
    icon?: string
}

export interface ICarMake {
    id: string
    name: string
    icon?: string
}

export interface MainCategory {
    id: string
    name: string
    image?: string
}

export interface SubCategory {
    id: string
    name: string
}
export interface LastCategory {
    id: string
    name: string
}


export interface ExtendedSubCategory extends SubCategory {
    lastCategories: LastCategory[]
}
export interface ExtendedCategory extends MainCategory {
    subCategories: ExtendedSubCategory[]
}


export type PropertyTypeEnum = 'RESIDENTIAL' | 'COMMERCIAL';
export type ProductIntentEnum = 'SALE' | 'RENTAL';
export type FurnishingStatusEnum = 'FURNISHED' | 'UNFURNISHED';
export type JobTypeEnum = 'FULL_TIME' | 'PART_TIME';
export type VehicleTypeEnum = 'CAR' | 'MOTORCYCLE';
export type FuelTypeEnum = 'PETROL' | 'DIESEL' | 'ELECTRIC';
export type TransmissionTypeEnum = 'MANUAL' | 'AUTOMATIC';
export type VehicleConditionEnum = 'NEW' | 'USED';
export type ProductStatusEnum = 'DRAFT' | 'ARCHIVE' | 'ACTIVE';
export type AdminStatusEnum = 'APPROVED' | 'PENDING' | 'REJECTED';
export type ProductCategoryEnum = 'PROPERTY' | 'VEHICLE' | 'JOB' | 'SERVICE' | 'CLASSIFIED';

export interface IProperty {
    id: string
    type: PropertyTypeEnum;
    intent: ProductIntentEnum;
    price: number;
    location: string;
    bedrooms?: number;
    bathrooms?: number;
    furnishing: FurnishingStatusEnum;
    area?: number;
}

export interface IJob {
    id: string
    type: JobTypeEnum;
    company?: string;
    location?: string;
    salary?: number;
    description?: string;
}

export interface IVehicle {
    id: string
    type: VehicleTypeEnum;
    make: string;
    model?: string;
    year?: number;
    price?: number;
    fuelType?: FuelTypeEnum;
    transmission: TransmissionTypeEnum;
    mileage: number;
    condition: VehicleConditionEnum;
}
export interface IService {
    id: string
    price: number;
    serviceId: string;
}

export interface IClassified {
    id: string
    price: number;
    categoryId?: string;
    subCategoryId?: string;
    lastCategoryId?: string;
}



export interface IProduct {
    id: string;
    name: string;
    description: string;
    features: string;
    slug: string;
    images: string[];
    status: ProductStatus
    adminStatus: AdminStatus
    category: ProductCategory
    totalViews: number;
    userId: string;
    createdAt: Date;
    updatedAt: Date;

    propertyDetail?: IProperty
    vehicleDetail?: IVehicle
    jobDetail?: IJob
    serviceDetail?: IService
    classifiedDetail?: IClassified

}