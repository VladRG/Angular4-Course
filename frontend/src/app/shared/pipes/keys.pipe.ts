import { Injectable, PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'keys' })
export class ObjectKeysPipe implements PipeTransform {
  transform(value: any) {
    return Object.keys(value);
  }
}
