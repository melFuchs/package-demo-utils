import { describe, expect, it } from 'vitest';
import { sum, average, faculty } from '../src/math.js';

describe('math utils', () => {
    it ('calculates sum of several numbers', () => {
        expect (
            sum(1,2,3,4,5)
        ).toBe(15);
    }); 

    it ('calculates average of several numbers', () => {
        expect (
            average(1,2,3,4,5)
        ).toBe(3); 
    }); 

    it ('calculates faculty of a number', () => {
        expect (
            faculty(5)
        ).toBe(120);
    });
}); 

// man kann Funktionen Variablen zuweisen
const x = (a,b) => a + b; 
const myResult = x(1,2); 