export class BaseEntity {
  id: number | string;
}

export class ResponseBase<T> {
  total: number;
  data: Array<T>;
}
