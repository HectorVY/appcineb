import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reserva',
})
export class ReservaPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
