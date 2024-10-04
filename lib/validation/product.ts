import { z } from 'zod';

export const PropertyTypeEnum = z.enum(['RESIDENTIAL', 'COMMERCIAL']);
export const ProductIntentEnum = z.enum(['SALE', 'RENTAL']);
export const FurnishingStatusEnum = z.enum(['FURNISHED', 'UNFURNISHED']);
export const JobTypeEnum = z.enum(['FULL_TIME', 'PART_TIME']);
export const VehicleTypeEnum = z.enum(['CAR', 'MOTORCYCLE']);
export const FuelTypeEnum = z.enum(['PETROL', 'DIESEL', 'ELECTRIC']);
export const TransmissionTypeEnum = z.enum(['MANUAL', 'AUTOMATIC']);
export const VehicleConditionEnum = z.enum(['NEW', 'USED']);
export const ProductStatusEnum = z.enum(['DRAFT', 'ARCHIVE', 'ACTIVE']);
export const AdminStatusEnum = z.enum(['APPROVED', 'PENDING', 'REJECTED']);
export const ProductCategoryEnum = z.enum(['PROPERTY', 'VEHICLE', 'JOB', 'SERVICE', 'CLASSIFIED']);

const CreatePropertyDetailsSchema = z.object({
    type: PropertyTypeEnum,
    intent: ProductIntentEnum,
    price: z.coerce.number(),
    location: z.string(),
    bedrooms: z.coerce.number().optional(),
    bathrooms: z.coerce.number().optional(),
    furnishing: FurnishingStatusEnum,
    area: z.coerce.number().optional(),
});

const CreateJobDetailsSchema = z.object({
    type: JobTypeEnum,
    company: z.string().optional(),
    location: z.string().optional(),
    salary: z.coerce.number().optional(),
    // description: z.string().optional(),
    jobCategoryId: z.string().optional()
});

const CreateVehicleDetailsSchema = z.object({
    type: VehicleTypeEnum,
    makeId: z.string(),
    model: z.string().optional(),
    year: z.coerce.number().int(),
    price: z.coerce.number(),
    fuelType: FuelTypeEnum,
    transmission: TransmissionTypeEnum,
    mileage: z.coerce.number(),
    condition: VehicleConditionEnum,
});
// Service Details Schema
const CreateServiceDetailsSchema = z.object({
    price: z.coerce.number(),
    serviceId: z.string(),
});

const CreateClassifiedDetailsSchema = z.object({
    price: z.coerce.number(),
    categoryId: z.string().optional(),
    subCategoryId: z.string().optional(),
    lastCategoryId: z.string().optional(),
});

const CreateProductSchema = z.object({
    name: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    features: z.string(),
    images: z.array(z.string().url()),
    status: ProductStatusEnum.optional(),
    adminStatus: AdminStatusEnum.optional(),
    category: ProductCategoryEnum,
    propertyDetail: CreatePropertyDetailsSchema.optional(),
    vehicleDetail: CreateVehicleDetailsSchema.optional(),
    jobDetail: CreateJobDetailsSchema.optional(),
    serviceDetail: CreateServiceDetailsSchema.optional(),
    classifiedDetail: CreateClassifiedDetailsSchema.optional(),
});

export {
    CreateProductSchema,
    CreatePropertyDetailsSchema,
    CreateJobDetailsSchema,
    CreateVehicleDetailsSchema,
    CreateServiceDetailsSchema,
    CreateClassifiedDetailsSchema,
};
