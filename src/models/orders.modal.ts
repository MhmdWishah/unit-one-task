export interface Location {
  LocationCode: number;
  LocationName: string;
}


export interface OrderDetail {
  Description: string;
  LocationCode: number;
  LocationName: string;
  Progress: number;
}


export interface OrderHeader{
  OperationDescription: string;
  StartDate: Date;
  EndDate: Date;
  Progress: number;
}

export interface Order{
  ID: number;
  OrderHeader: OrderHeader;
  OrderDetails: OrderDetail[]
}
