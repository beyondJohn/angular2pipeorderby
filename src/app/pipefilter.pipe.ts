import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipefilter'
})
export class PipefilterPipe implements PipeTransform {

  transform(eventsOld: Array<object>, args: string, args1: string, args2: string): Array<object> {

    let adder: number = 0;
    let array: Array<object> = [];
    eventsOld.forEach(element => {
       
      //create new strongly typed object for later iteration
      let myObj: orderbyutcstart = new orderbyutcstart();

      //fill strongly typed object with values
      myObj.utcstart = eventsOld[adder.toString()].utcstart;
      myObj.endate = eventsOld[adder.toString()].endate;
      myObj.name = eventsOld[adder.toString()].name;
      myObj.imageurl = eventsOld[adder.toString()].imageurl;
      myObj.venue = eventsOld[adder.toString()].venue;
      myObj.timezone = eventsOld[adder.toString()].timezone;

      //push new strongly typed object to object array
      array.push(myObj);
      
      adder++;
    });
    
    // this will sort first by 'utcstartdate' then by 'endate' then by 'name'
    array = array.sort(function (a, b) {
      // x & y are utcstartdate compare operators
      let x = new Date(a[args]);
      let y = new Date(b[args]);
      // u & v are name compare operators
      let u = a[args2];
      let v = b[args2];
      // s & t are endate compare operators
      let s = new Date(a[args1]);
      let t = new Date(b[args1]);
      
      // first check if utcstartdates are identical
      if(x.getTime() === y.getTime()){
        // if utcstartdates are identical check if endates are not identical
        if(s.getTime() !== t.getTime()){
          return s.getTime() > t.getTime() ? 1 
          : s.getTime() < t.getTime() ? -1 
          : 0;
        }
        // if endates are identical then sort by 'name'
        else{
        return u > v ? 1 
        : u < v ? -1 
        : 0;
        }
      }
      // if utcstartdates are not identical then order by utcstart dates 
      // (following orders array by desc, if want asc switch -1 and 1 positions 
      // in following if statement)
      else{
        return x.getTime() > y.getTime() ? -1 
        : x.getTime() < y.getTime() ? 1 
        : 0;
      }
      
    })
    
    return array;
  }

}
class orderbyutcstart {
  public utcstart: Date;
  public endate: Date;
  public name: string;
  public imageurl: string;
  public venue: string;
  public timezone: string;
}

