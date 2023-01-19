
export interface School {
    _id: number
    School_Id: number
    Org_Name: string
    Telephone: string
    Fax: string
    Email: string
    Contact1_Name: string
    URL: string
    Add1_Line1: string
    Add1_Suburb: string
    Add1_City: string
    Add2_Line1: string
    Add2_Suburb: string
    Add2_City: string
    Add2_Postal_Code: number
    Urban_Area: string
    Org_Type: string
    Definition: string
    Authority: string
    School_Donations: string
    CoEd_Status: string
    Territorial_Authority: string
    Regional_Council: string
    Local_Office_Name: string
    Education_Region: string
    General_Electorate: string
    Mori_Electorate: string
    Area_Unit: string
    Ward: string
    Col_Id?: number
    Col_Name: string
    Latitude: number
    Longitude: number
    Isolation_Index: string
    Decile: number
    Roll_Date: Date
    Total: number
    European: number
    Mori: number
    Pacific: number
    Asian: number
    MELAA: number
    Other: number
    International: number
    rank: number
}

export interface Field {
    id: string
    type: string
}

export interface Links {
    start: string
    next: string
}

export interface SchoolApiResult {
    include_total: boolean
    limit: number
    q: string
    records_format: string
    resource_id: string
    total_estimation_threshold?: any
    records: School[]
    fields: Field[]
    _links: Links
    total: number
    total_was_estimated: boolean
}

export interface SchoolApiResponse {
    help: string
    success: boolean
    result: SchoolApiResult
}

export const getFullAddress = (school: School) => {
    const addressArray = []
    if (school.Add1_Line1) {
        addressArray.push(school.Add1_Line1)
    }
    if (school.Add1_Suburb) {
        addressArray.push(school.Add1_Suburb)
    }
    if (school.Add1_City) {
        addressArray.push(school.Add1_City)
    }
    return addressArray.join(", ")
}
