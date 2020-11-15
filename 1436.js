const destCity = (paths) => {
  if (paths.length === 1) {
    return paths[0][1];
  }

  const start = {};

  for (let i = 0; i < paths.length; i++) {
    const currentPath = paths[i];
    const startPath = currentPath[0];

    start[startPath] = true;
  }

  for (let i = 0; i < paths.length; i++) {
    const currentPath = paths[i];
    const endPath = currentPath[1];

    if (!start[endPath]) {
      return endPath;
    }
  }
};
