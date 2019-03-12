'use strict';

const timeStampParser = (timeStamp) => {
  const dateFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const dateValue = timeStamp.match(/^\d+$/) ? new Date(Number(timeStamp)) : new Date(timeStamp);
  const naturalDate = dateValue.toLocaleDateString("en-US", dateFormatOptions);
  const unixDate = dateValue.getTime();
  if (!dateValue) {
    return { error  : naturalDate };
  }
    return { unix: unixDate, natural: naturalDate };
};

module.exports = {
    timeStampParser
}