// code your solution here
function superbowlWin(record) {
  const winningYearObject = record.find(game => game.result === "W");
  if(winningYearObject) {
    return winningYearObject.year
  } else {
    return undefined;
  }
}

const record = [
  { year: "2018", result: "N/A"},
  { year: "2017", result: "N/A"},
  { year: "2016", result: "N/A"},
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year:"2013", result: "L"},
];

'describe(superbowlWin(record)' , function () {
  it('returns a year the Denver Broncos won the superbowl', function() {
    expect(superWin(record)).to.equal(2015);
  });

  it('returns undefined if the record has no win objects', function() {
    const sadReality = [ { result: "N/A"}, { result: "N/A"}, { result: "N/A"}];
    expect(superbowlWin(sadReality)).to.equal(undefined);
  });
}