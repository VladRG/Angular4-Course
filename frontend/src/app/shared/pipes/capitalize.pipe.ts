import { Injectable, PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
  transform(value: any) {
    const newValue = `${value}`;
    return newValue.toUpperCase();
  }
}
