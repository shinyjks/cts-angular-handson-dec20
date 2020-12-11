import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'findLength'
})
export class LengthFinder implements PipeTransform{
    transform(value: string) {
        return value.length;
    }
}

@Pipe({
    name: 'personTitle'
})
export class PersonTitle implements PipeTransform{
    transform(value: string, args: any) {
        if(args == 'M')
            return 'Mr. '+value;
        else if(args == 'F')
            return 'Ms. '+value;
    }
    
}