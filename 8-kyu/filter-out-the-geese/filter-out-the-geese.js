function gooseFilter(birds) {
  const geese = [
    'African',
    'Roman Tufted',
    'Toulouse',
    'Pilgrim',
    'Steinbacher',
  ];

  // Use filter to return only birds that are not in the geese list
  return birds.filter((bird) => !geese.includes(bird));
}
