const getFirstAlbumTitle = require('../Helpers/requests');

it('returns the title of the first album', async () => {
  const title = await getFirstAlbumTitle();  // Run the function
  expect(title).toEqual('quidem molestiae enim');  // Make an assertion on the result
});