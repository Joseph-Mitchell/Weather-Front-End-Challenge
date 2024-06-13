import axios from "axios";

import searchLocation from "../../src/services/Location.service.js"
import testLocations from "../data/testLocations.js"

vi.mock("axios")

describe('Location Searcher: ', () => {
    it('should return json array of objects when axios get resolves', async () => {
        //Arrange
        axios.get.mockResolvedValueOnce(testLocations);
        
        //Act
        const actual = await searchLocation();
        
        //Assert
        expect(actual).to.equal(testLocations);
    });
});