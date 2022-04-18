let a: number = 5;
let b: string = 'common string';
let c = true;

const d: string[] = ['a', 'b', 'c'];

//not recommended for use in production, as it suggests inability to safeguard the code from dynamic types
let e: any = 5;
e = 'dhfj';

function test(a: number):string {
  return `${a} грибов в корзине`;
}

//| means alternative
function test1(a: number):string | number {
  return `${a} грибов в корзине`;
}

//? means that some param may not be provided
function countCoord(coord: { lat: number, long?: number }) {
  
}

//there are also types undefined and null


//types and interfaces

type Point = {
  x: number,
  y: number,
}

type newPoint = Point & {
  z: number,
}

interface IPoint {
  x: number,
  y: number,
}

interface NewIPoint extends IPoint {
  z: number,
}

function markPoint(coord: Point) {

}

//it is recommended to use everywhere interfaces and use types only when you write conditional type Point = number | string

interface Info {
  desc: string,
  isActive: boolean,
}

interface Tag {
  name: string,
	value: number,
}

interface Reply {
  userId: number,
	id: number,
	title: string,
  info: any,
	tags: any,
}

//литеральный типы
let c: 'test' = 'test';

type actionType = 'up' | 'down';

function performAction(action: actionType): -1 | 1 {
  switch (action) {
    case 'down':
      return -1;
    case 'up':
      return 1;
  }
}

//param type can have a combination of alternatives
function performComplexAction(action: actionType | Info) {
  switch (action) {
    case 'down':
      return -1;
    case 'up':
      return 1;
  }
}