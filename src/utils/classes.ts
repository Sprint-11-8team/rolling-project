type NewClassType = string | string[] | undefined

const classes = (prevClass: string, newClass: NewClassType): string => {
  if (!newClass) return prevClass;
  else if (typeof newClass === 'string') return [prevClass, newClass].join(' ');
  else return [prevClass, ...newClass].join(' ');
};

export default classes;