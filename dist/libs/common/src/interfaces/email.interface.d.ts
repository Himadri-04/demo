export interface SendInvitation {
    firstName: string;
    contactName: string;
    companyName: string;
    emailMessage: string;
}
export interface ShareOffer {
    token: string;
}
export interface IResetPassword {
    token: string;
}
export interface AddUser {
    emailMessage: string;
    firstName: string;
}
