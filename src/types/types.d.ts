export type AddressType = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
}

export type CompanyType = {
    name: string;
    catchPhrase: string;
    bs: string;
}

export type UserType = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: AddressType;
    phone: string;
    website: string;
    company: CompanyType;
}

export type PostType = {
    id: number;
    text: string;
}

export type DialogType = {
    id: number;
    name: string;
}

export type MessageType = {
    id: number;
    text: string;
}
