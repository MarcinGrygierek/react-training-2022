import React from 'react';
import { Ex10Or } from './ex10_conditional_rendering_or';
import { Ex11Ternary } from './ex11_conditional_rendering_ternary';
import { HelloWorld } from './ex1_hello_world';
import { Foo } from './ex2_expressions';
import { Ex3 } from './ex3_attributes';
import { Ex4 } from './ex4_nesting_fragment';
import { Ex5 } from './ex5_lists_and_keys';
import { Ex6 } from './ex6_class_vs_function';
import { Ex7 } from './ex7_props';
import { Ex8 } from './ex8_destructuring_props';
import { Ex9If } from './ex9_conditional_rendering_if';
import { Zad1 } from './zad1';
import { Zad2 } from './zad2';
import { Zad3 } from './zad3';
import { Card } from './zad67';
import { Zad89 } from './zad89';

const App = () => {
  // return <HelloWorld />
  // return <Foo />
  // return <Ex3 />
  // return <Ex4 />
  // return <Ex5 />
  // return <Ex6 />
  // return <Zad1 />
  // return <Zad2 />
  // return <Zad3 />
  // return <Card />
  // return <Ex7 name='Marcin' />
  // return <Ex8 name='Lorem ipsum' />
  // return <Ex9If />
  // return <Ex10Or />
  // return <Ex11Ternary isOn={true} />
  // return <Zad89 item={{
  //   firstName: 'Marcin',
  //   lastName: 'Grygierek',
  //   experience: ['lorem', 'ipsum','dolor']
  // }}/>
  return <Zad89 firstName='' lastName='Grygierek' experience={['Lorem', 'ipsum', 'dolor']} />
}

export default App;
