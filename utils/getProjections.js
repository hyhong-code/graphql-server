module.exports = (fieldASTs) => {
  return fieldASTs.fieldNodes[0].selectionSet.selections.reduce(
    (projection, selection) => {
      projection[selection.name.value] = true;
      return projection;
    },
    {}
  );
};

/*
fieldASTs.fieldNodes[0].selectionSet.selections: [
  {
    kind: 'Field',
    alias: undefined,
    name: { kind: 'Name', value: 'id', loc: [Object] },
    arguments: [],
    directives: [],
    selectionSet: undefined,
    loc: { start: 36, end: 38 }
  },
  {
    kind: 'Field',
    alias: undefined,
    name: { kind: 'Name', value: 'name', loc: [Object] },
    arguments: [],
    directives: [],
    selectionSet: undefined,
    loc: { start: 43, end: 47 }
  }
]
*/
