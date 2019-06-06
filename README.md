# friendFinder
friendFinder app

#[Hosted site](https://fictivefriendfinder.herokuapp.com/)

This app matches you based on a personality quiz survey score. Based on your answers, you can see which friend in the data store who is the closes match to your answers.

This app uses a node module package called Euclidean Distance to determine the distance between vectors in n-space. Because there are ten questions which measure a responsdent's personality in each of ten dimensions, and because each dimension has a total of five possible values, there is a personality space defined and every respondent's survey scores describes a vector in this 10-dimensional space. Using the distance method of the "euclidean-distance" node module easily provides the distance measurement from the user's vector to each person's vector which is in the data store file, friends.js. Distance is a positive scalar value, so an array of ten values is flattened to give only a single value.

After computing the distances between the user's vector and all possible friends' vectors, the distances are sorted, and the person in the data store having the smallest distance value between his score vectors and that of the user is considered the best match.
