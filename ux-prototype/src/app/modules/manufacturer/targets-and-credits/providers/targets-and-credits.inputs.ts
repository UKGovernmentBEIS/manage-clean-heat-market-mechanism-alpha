export interface Input {
  boilerSales: InputBoilerSales | null;
  heatPumps: InputHeatPumps;
  carryOver: InputCarryOver;
  trades: InputTrades;
}

export interface InputBoilerSales {
  above: boolean;
  gas: number;
  oil: number;
}

export interface InputHeatPumps {
  hybrid: number;
  nonHybrid: number;
}

export interface InputCarryOver {
  obligation: number;
  credits: number;
}

export interface InputTrades {
  in: number;
  out: number;
}

const NOT_MEETING_OBLIGATION: Input = {
  boilerSales: { above: true, gas: 430_000, oil: 9_000 },
  heatPumps: { nonHybrid: 6_540, hybrid: 1_000 },
  carryOver: { obligation: 500, credits: 265 },
  trades: { in: 265, out: 0 },
};

const MEETING_OBLIGATION: Input = {
  boilerSales: { above: true, gas: 420_000, oil: 10_000 },
  heatPumps: { nonHybrid: 25_000, hybrid: 2_000 },
  carryOver: { obligation: 500, credits: 305 },
  trades: { in: 1000, out: 0 },
};

const NO_OBLIGATION: Input = {
  boilerSales: { above: false, gas: 6_472, oil: 814 },
  heatPumps: { nonHybrid: 6_540, hybrid: 1_000 },
  carryOver: { obligation: 0, credits: 265 },
  trades: { in: 265, out: 0 },
};

const NO_TARGET: Input = {
  boilerSales: null,
  heatPumps: { nonHybrid: 6_540, hybrid: 1_000 },
  carryOver: { obligation: 0, credits: 265 },
  trades: { in: 265, out: 0 },
};

const BEFORE_CARRY_OVER: Input = {
  boilerSales: { above: false, gas: 6_472, oil: 814 },
  heatPumps: { nonHybrid: 6_540, hybrid: 1_000 },
  carryOver: { obligation: 0, credits: 0 },
  trades: { in: 265, out: 0 },
};

export {
  NOT_MEETING_OBLIGATION,
  MEETING_OBLIGATION,
  NO_OBLIGATION,
  NO_TARGET,
  BEFORE_CARRY_OVER,
};
