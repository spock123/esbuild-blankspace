export interface IParentCompany {
    parentCompanyID: string;
    name: string;
    email: string;
    uid: string;
}

export interface ICompanyChain {
    companyChainID: string;
    name: string;
    parentCompanyID: string;
    masterCompanyID: string;
    members: any;
}
