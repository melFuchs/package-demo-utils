import { describe, expect, it } from 'vitest';
import { sum, average } from '../src/math';

describe('math utils', () => {
    it ('calculates sum of several numbers', () => {
        expect (
            sum(1,2,3)
        ).toBe(6); 
    }); 

    it ('calculates average of several numbers', () => {
        expect (
            average(1,2,3)
        ).toBe(2); 
    }); 
}); 

// man kann Funktionen Variablen zuweisen
const x = (a,b) => a + b; 
const myResult = x(1,2); 