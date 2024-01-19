export * from './role';
export * from './firebase';
export * from './parent-company';

export enum CompanyLicense {
    FREEMIUM = 'FREEMIUM',
    PREMIUM_PAYMENT = 'PREMIUM_PAYMENT',
    PREMIUM_NO_PAYMENT = 'PREMIUM_NO_PAYMENT',
    PAYMENT = 'PAYMENT' // TODO: REMOVE WHEN ALL COMPANIES LICENSES ARE CHANGED TO PREMIUM_NO_PAYMENT
}

export const enum CompanySegment {
    TAKE_AWAY = 'TAKE_AWAY',
    CAFE = 'CAFE',
    CASUAL_DINING = 'CASUAL_DINING',
    WINE_BAR = 'WINE_BAR',
    FINE_DINING = 'FINE_DINING'
}

export const CompanySegmentList = [
    CompanySegment.TAKE_AWAY,
    CompanySegment.CAFE,
    CompanySegment.CASUAL_DINING,
    CompanySegment.WINE_BAR,
    CompanySegment.FINE_DINING
];

export const enum CompanyStatus {
    OPERATING = 'Operating',
    SIGNED_NOT_OPERATING = 'Signed not operating',
    POTENTIAL = 'Potential',
    INTERNAL = 'Internal',
    FREEMIUM = 'Freemium',
    CHURNED = 'Churned',
    UNVALIDATED = 'Unvalidated'
}

export * from './public-data';
export * from './quantity-unit';

//export { CompanySegment, CompanyLicense, CompanySegmentList, CompanyStatus } from '@types';
