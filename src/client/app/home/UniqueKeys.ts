import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'uniqueKeys'})
export class UniqueKeys implements PipeTransform {

  transformKeys(value:any, ...args:string[]) : any {
    let keys = [];
    for (let key in value) {


      keys.push({key: key, value: value[key]});

    }
    return keys;
  }
  transform(selectedPlatformList:any[], args:string[]) : any {
    let paramList:any[]=[];
    for(let platform of selectedPlatformList){
      console.log(platform);
      let existingKeys=paramList.map((elem)=>{return elem.key});
      let doesNotExist=(<any[]>this.transformKeys(platform.params)).filter((_platform:any)=>!existingKeys.includes(_platform.key));
      if(doesNotExist)
      paramList.push.apply(paramList,doesNotExist);
    }
    console.log(paramList);
    return paramList;
  }
}
