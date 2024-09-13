import { ALL_PERMISSIONS } from "@/config/permission";


export enum GENDER {
    M,
    F
}
export enum EMPLOYMENT_STATUS {
    FULL_TIME,
    PART_TIME,
    CONTRACTOR,
    TEMPORARY,
    CASUAL
}


export interface IPermission {
    id: string
    branchId: string[]
    permissions: typeof ALL_PERMISSIONS[number][]
    grantAll: boolean,
    userId: string
}

export interface IProfile {
    id: string,
    fullName: string,
    addresses?: string[],
    gender?: GENDER,
    dateOfBirth?: string,
    salary?: float,
    emernContact?: string,
    note?: string,
    employmentStatus: EMPLOYMENT_STATUS,
    profileImg?: string,
    userId?: string
}

export interface ISecurityProfile {
    id: string,
    userId?: string
    fingerprintHash?: string,
    softDeleted: boolean,
    saveActivityLog: boolean,
    notifyOnSuspiciousActivity: boolean,
}


export interface IUser {
    id?: string | null | undefined;
    email?: string | null | undefined;
    role?: string;
    phoneNumber?: string;
    firstTimeLogin?: boolean;
    permission: IPermission,
    SecurityProfile: ISecurityProfile,
    profile: IProfile
}


export interface User {
    user?: IUser;
    accessToken?: string;
    refreshToken?: string;
}