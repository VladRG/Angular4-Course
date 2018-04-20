import { Injectable, PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'timestamp' })
export class TimestampPipe implements PipeTransform {
  transform(value: any) {
    const timestamp = parseFloat(`${value}`);
    return new Date(timestamp * 1000);
  }
}
