import axios from "axios";

import searchLocation from "../../src/services/Location.service.js"
import testLocations from "../data/testLocations.js"
import { beforeAll, expect, vi } from "vitest";

vi.mock("axios");

describe("Location service", () => {
    
    it("should return json array of objects when axios get resolves", async () => {
        //Arrange
        axios.get.mockResolvedValueOnce({ data: testLocations });
        
        //Act
        const actual = await searchLocation();
        
        //Assert
        expect(actual).to.equal(testLocations);
    });
    
    it("should log to console when axios get throws error", async () => {
        //Arrange
        axios.get.mockRejectedValueOnce(new Error("error message"));
        const logSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);
        
        //Act
        await searchLocation();
        
        //Assert
        expect(logSpy).toBeCalled();
        logSpy.mockReset();
    });
});