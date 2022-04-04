import calculateBMI from "./utilities";

test("test calculation correctness", () => {

    //Underweight
    expect(calculateBMI(5,9,115)).toBe(17.4);
    
    //normal weight
    expect(calculateBMI(5,3,125)).toBe(22.7)

    //overweight
    expect(calculateBMI(6,1,210)).toBe(28.4)

    //obese
    expect(calculateBMI(5,10,250)).toBe(36.7)
    
})