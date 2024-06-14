import axios from "axios";

import searchWeather from "../../src/services/Weather.service.js"
import testLocations from "../data/testLocations.js"
import { expect, vi } from "vitest";

vi.mock("axios");

describe("Weather service", () => {
    
    it("should return json array of objects when axios get resolves", async () => {
        //Arrange
        axios.get.mockResolvedValueOnce({ data: testLocations });
        const testLat = 20;
        const testLon = 35;
        const expectedParameter = "http://localhost:3000/weather/2035"
        
        //Act
        const actual = await searchWeather(testLat, testLon);
        
        //Assert
        expect(actual).to.equal(testLocations);
        expect(axios.get).toBeCalledWith(expectedParameter);
    });
});