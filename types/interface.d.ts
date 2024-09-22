export interface IUser {
    id?: string | null | undefined;
    email?: string | null | undefined;
    role?: string;
    fullName?: string;
    firstTimeLogin?: boolean;
    active: boolean
    createdAt: Date
    updatedAt: Date
}

export interface IProfile {
    id: string
    phone?: string
    avatar?: string | null,
    address?: string | null
    userId: string
}

export interface IUserWithProfile extends IUser {
    profile: IProfile
}



export interface IAuthToken {
    accessToken: string
    refreshToken: string
    sessionId: string
    expiresIn: number
}





export interface User {
    userData?: IUser;
    authToken?: IAuthToken;
}