export const arrayRotate = (arr:Array<any>, count:number=1)=> {
  return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
}