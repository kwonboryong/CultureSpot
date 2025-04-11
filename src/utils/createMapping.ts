function createMapping<
  T extends readonly string[],
  U extends readonly string[],
>(keys: T, values: U) {
  return Object.fromEntries(keys.map((key, i) => [key, values[i]])) as Record<
    T[number],
    U[number]
  >;
}

export default createMapping;
