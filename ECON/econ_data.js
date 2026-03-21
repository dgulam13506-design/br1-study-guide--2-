// ============================================================
//  ECONOMICS STUDY GUIDE — ECON/data.js
//  Textbook: Shapiro, MacDonald & Greenlaw
//  Principles of Economics 3e (OpenStax)
// ============================================================

// ─────────────────────────────────────────────
// FLASHCARDS
// ─────────────────────────────────────────────
var ECON_FLASHCARDS = {
  ec1: [
    { q:"What is economics?", a:"The study of how humans make choices under conditions of scarcity. It examines how individuals, businesses, and governments allocate limited resources." },
    { q:"What is scarcity?", a:"The situation where wants and needs exceed the available resources. Scarcity forces choices and trade-offs." },
    { q:"What is the difference between microeconomics and macroeconomics?", a:"Microeconomics studies individual decisions (consumers, firms, markets). Macroeconomics studies the economy as a whole (GDP, inflation, unemployment)." },
    { q:"What are the factors of production?", a:"Land, Labour, Capital, and Entrepreneurship — the four resources used to produce goods and services." },
    { q:"What is a production possibilities frontier (PPF)?", a:"A graph showing the maximum combinations of two goods an economy can produce when all resources are fully and efficiently used." },
    { q:"What does a point inside the PPF represent?", a:"Productive inefficiency — the economy is not using all its resources fully." },
    { q:"What does a point outside the PPF represent?", a:"Currently unattainable — the economy cannot produce that combination with current resources and technology." },
  ],
  ec2: [
    { q:"What is opportunity cost?", a:"The value of the next best alternative you give up when making a choice. It is the true cost of any decision." },
    { q:"What is a budget constraint?", a:"A line showing all combinations of goods a consumer can afford given their income and the prices of goods." },
    { q:"What happens to the budget constraint when income rises?", a:"It shifts outward (parallel shift), allowing the consumer to afford more of both goods." },
    { q:"What is the law of diminishing marginal utility?", a:"As a person consumes more units of a good, the additional satisfaction (marginal utility) from each extra unit eventually decreases." },
    { q:"What is the concept of 'trade-offs'?", a:"Because of scarcity, every choice involves giving something up. There is no free lunch — all choices have opportunity costs." },
    { q:"What is comparative advantage?", a:"The ability to produce a good at a lower opportunity cost than another producer. It is the basis for specialisation and trade." },
  ],
  ec3: [
    { q:"What is the law of demand?", a:"When the price of a good rises, the quantity demanded falls (and vice versa), ceteris paribus. Price and quantity demanded move in opposite directions." },
    { q:"What causes a movement along the demand curve?", a:"A change in the price of the good itself. This is called a change in quantity demanded." },
    { q:"What causes a shift of the demand curve?", a:"A change in anything other than the good's own price: income, prices of related goods, tastes, expectations, or number of buyers." },
    { q:"What is the law of supply?", a:"When the price of a good rises, the quantity supplied rises (and vice versa), ceteris paribus. Price and quantity supplied move in the same direction." },
    { q:"What is market equilibrium?", a:"The price at which quantity demanded equals quantity supplied. The market 'clears' — no surplus or shortage." },
    { q:"What is a surplus (excess supply)?", a:"When quantity supplied exceeds quantity demanded at a given price. The price is above equilibrium, pushing it downward." },
    { q:"What is a shortage (excess demand)?", a:"When quantity demanded exceeds quantity supplied at a given price. The price is below equilibrium, pushing it upward." },
    { q:"What are substitutes?", a:"Goods that can be used in place of each other (e.g. butter and margarine). A rise in the price of one increases demand for the other." },
    { q:"What are complements?", a:"Goods consumed together (e.g. cars and petrol). A rise in the price of one decreases demand for the other." },
  ],
  ec5: [
    { q:"What is price elasticity of demand (PED)?", a:"A measure of how responsive quantity demanded is to a change in price. PED = % change in Qd ÷ % change in Price." },
    { q:"What does elastic demand mean?", a:"PED > 1: quantity demanded is very responsive to price changes. A small price rise causes a large drop in quantity demanded." },
    { q:"What does inelastic demand mean?", a:"PED < 1: quantity demanded is not very responsive to price changes. A large price rise causes only a small drop in quantity demanded." },
    { q:"What makes demand more elastic?", a:"Many substitutes available, the good is a luxury, it takes a large share of income, and consumers have more time to adjust." },
    { q:"What is price elasticity of supply?", a:"A measure of how responsive quantity supplied is to a price change. PES = % change in Qs ÷ % change in Price." },
    { q:"What is income elasticity of demand?", a:"Measures how responsive quantity demanded is to a change in consumer income. Positive for normal goods, negative for inferior goods." },
    { q:"Can businesses always pass cost increases on to consumers?", a:"Only if demand is inelastic. If demand is elastic, raising prices causes a large drop in sales and revenue may fall." },
  ],
  ec7: [
    { q:"What is a fixed cost?", a:"A cost that does not change with the level of output (e.g. rent, machinery). It must be paid even if output is zero." },
    { q:"What is a variable cost?", a:"A cost that changes with the level of output (e.g. raw materials, hourly wages)." },
    { q:"What is marginal cost?", a:"The additional cost of producing one more unit of output. MC = Change in Total Cost ÷ Change in Quantity." },
    { q:"What is average total cost (ATC)?", a:"Total cost divided by the quantity produced. ATC = TC ÷ Q. Also equals AFC + AVC." },
    { q:"What are economies of scale?", a:"When increasing the scale of production leads to a lower average cost per unit. Long-run ATC falls as output rises." },
    { q:"What is the relationship between marginal cost and average total cost?", a:"When MC < ATC, ATC is falling. When MC > ATC, ATC is rising. MC crosses ATC at its minimum point." },
    { q:"What is production in the long run?", a:"In the long run, all inputs are variable — the firm can change its plant size and all factors of production." },
  ],
  ec8: [
    { q:"What are the characteristics of perfect competition?", a:"Many buyers and sellers, identical (homogeneous) products, free entry and exit, perfect information, and price-taking firms." },
    { q:"What is a price taker?", a:"A firm that accepts the market price as given — it has no market power to influence price. Typical of perfectly competitive firms." },
    { q:"What is the profit-maximising rule?", a:"Produce where Marginal Revenue (MR) = Marginal Cost (MC). This applies to all market structures." },
    { q:"In perfect competition, what equals price?", a:"In perfect competition, P = MR = AR. The firm's demand curve is perfectly elastic (horizontal) at the market price." },
    { q:"What is the shutdown point?", a:"A firm shuts down in the short run when price falls below Average Variable Cost (P < AVC) — it cannot cover variable costs." },
    { q:"What happens in long-run equilibrium in perfect competition?", a:"Economic profit = 0. P = MR = MC = ATC. Firms earn only normal profit, and there is no incentive for entry or exit." },
    { q:"What is economic profit vs normal profit?", a:"Economic profit = Total Revenue − Total Cost (including opportunity costs). Normal profit = zero economic profit; the firm earns just enough to stay." },
  ],
  ec9: [
    { q:"What is a monopoly?", a:"A market with a single seller producing a product with no close substitutes. The monopolist is a price maker, not a price taker." },
    { q:"What are barriers to entry in a monopoly?", a:"Legal barriers (patents, licences), natural barriers (high fixed costs), resource control, or network effects that prevent competition." },
    { q:"How does a monopolist maximise profit?", a:"By producing where MR = MC, then setting the price from the demand curve at that quantity. Price > MC." },
    { q:"Why is MR < Price for a monopolist?", a:"To sell more units, the monopolist must lower the price on all units sold. So the revenue gained from the extra unit is less than the price." },
    { q:"What is deadweight loss in a monopoly?", a:"The loss of economic efficiency when a monopolist produces less than the socially optimal quantity and charges a higher price." },
    { q:"What is price discrimination?", a:"Charging different prices to different consumers for the same good, based on their willingness to pay." },
  ],
  ec10: [
    { q:"What is monopolistic competition?", a:"A market with many firms selling differentiated products with free entry and exit. Firms have some price-setting power due to differentiation." },
    { q:"What is product differentiation?", a:"Making a product distinct from competitors through quality, branding, features, or location — giving the firm some market power." },
    { q:"What is an oligopoly?", a:"A market dominated by a few large firms. Each firm's decisions affect and are affected by rivals. High barriers to entry." },
    { q:"What is the Prisoner's Dilemma?", a:"A game theory scenario where two players acting in self-interest produce a worse outcome than if they had cooperated." },
    { q:"What is collusion?", a:"When oligopolists secretly agree to fix prices or limit output to act like a monopoly and earn higher profits. Usually illegal." },
    { q:"How does monopolistic competition differ from perfect competition in the long run?", a:"In monopolistic competition, firms earn zero economic profit long-run (like PC), but produce at excess capacity with P > MC, so it is not productively efficient." },
    { q:"What is the four-firm concentration ratio?", a:"The combined market share of the four largest firms in an industry. A high ratio (e.g. >60%) indicates an oligopoly." },
  ],
  ec12: [
    { q:"What is an externality?", a:"A cost or benefit that affects a third party not involved in the transaction. It represents a market failure." },
    { q:"What is a negative externality?", a:"A cost imposed on third parties not involved in production or consumption (e.g. pollution from a factory)." },
    { q:"Why does a negative externality cause market failure?", a:"Producers only consider private costs, not social costs. They overproduce relative to the socially optimal quantity." },
    { q:"What is the social optimum?", a:"The output level where Marginal Social Cost = Marginal Social Benefit. This maximises overall social welfare." },
    { q:"What is command-and-control regulation?", a:"Government rules that directly limit pollution or require specific technologies. Example: emission standards." },
    { q:"What is a Pigouvian tax?", a:"A tax equal to the external cost, designed to make producers internalise the negative externality and reduce output to the social optimum." },
  ],
  ec13: [
    { q:"What is a positive externality?", a:"A benefit enjoyed by third parties not involved in the transaction (e.g. neighbours benefiting from a vaccinated community)." },
    { q:"Why does a positive externality cause market failure?", a:"The market underproduces because producers/consumers ignore the social benefit. Output is below the social optimum." },
    { q:"What is a subsidy in the context of positive externalities?", a:"A government payment to producers or consumers to encourage more production of goods with positive externalities." },
    { q:"What is a public good?", a:"A good that is non-excludable (cannot prevent anyone from using it) and non-rival (one person's use does not reduce availability). E.g. national defence." },
    { q:"Why do markets underprovide public goods?", a:"Because of the free-rider problem — people can benefit without paying, so private firms cannot profit from providing them." },
    { q:"What is the free-rider problem?", a:"When individuals benefit from a good without contributing to its cost, knowing others will pay for it." },
  ],
};

// ─────────────────────────────────────────────
// CHAPTER QUIZZES
// ─────────────────────────────────────────────
var ECON_CHAPTER_QUIZZES = {
  ec1: [
    { q:"Economics is primarily concerned with:", opts:["How governments collect taxes","How choices are made under scarcity","How to maximise production","How to eliminate poverty"], c:1, fb:"Economics studies how individuals, firms, and governments allocate scarce resources to satisfy unlimited wants." },
    { q:"A point inside the Production Possibilities Frontier (PPF) indicates:", opts:["The economy is productively efficient","The economy is using resources that don't exist","Productive inefficiency — resources are not fully used","The economy has grown"], c:2, fb:"A point inside the PPF means the economy is not fully or efficiently using its available resources." },
    { q:"Which of the following is NOT a factor of production?", opts:["Labour","Capital","Money","Land"], c:2, fb:"Money is not a factor of production — it is a medium of exchange. The factors are Land, Labour, Capital, and Entrepreneurship." },
  ],
  ec2: [
    { q:"Opportunity cost is best defined as:", opts:["The monetary price of a good","The value of the next best alternative foregone","The total cost of all alternatives","The cost of production"], c:1, fb:"Opportunity cost is what you give up when making a choice — the value of the best alternative not chosen." },
    { q:"A budget constraint shifts outward (parallel) when:", opts:["The price of one good falls","The price of both goods rise","Consumer income increases","Consumer preferences change"], c:2, fb:"An increase in income allows the consumer to buy more of both goods, shifting the budget constraint outward in parallel." },
    { q:"Comparative advantage means a country should specialise in goods where it has:", opts:["The highest absolute productivity","The lowest opportunity cost","The most natural resources","The largest labour force"], c:1, fb:"Comparative advantage is based on lower opportunity cost, not absolute productivity. It is the basis for beneficial trade." },
  ],
  ec3: [
    { q:"According to the law of demand, when the price of coffee rises:", opts:["Demand for coffee shifts right","Quantity demanded of coffee falls","Quantity demanded of coffee rises","Supply of coffee falls"], c:1, fb:"The law of demand: price and quantity demanded move in opposite directions. A price rise causes a fall in quantity demanded — movement along the curve." },
    { q:"Which event would shift the demand curve for beef to the LEFT?", opts:["A rise in income (beef is a normal good)","A fall in the price of chicken (a substitute)","A news report linking beef to health risks","An increase in the number of consumers"], c:2, fb:"Bad health news reduces consumer taste/preference for beef, shifting the demand curve left — fewer people want it at every price." },
    { q:"A surplus in a market occurs when:", opts:["Price is below equilibrium","Quantity demanded exceeds quantity supplied","Price is above equilibrium","The market is in balance"], c:2, fb:"A surplus (excess supply) occurs when the price is too high — quantity supplied exceeds quantity demanded, pushing price back down." },
    { q:"Butter and margarine are substitute goods. If the price of butter rises, what happens to the demand for margarine?", opts:["It falls","It rises","It stays the same","It depends on income"], c:1, fb:"When the price of a substitute rises, consumers switch to the cheaper alternative. Demand for margarine increases (shifts right)." },
  ],
  ec5: [
    { q:"If a 10% rise in price causes a 20% fall in quantity demanded, demand is:", opts:["Inelastic (PED < 1)","Unit elastic (PED = 1)","Elastic (PED > 1)","Perfectly inelastic"], c:2, fb:"PED = 20% ÷ 10% = 2. Since PED > 1, demand is elastic — quantity demanded is very responsive to the price change." },
    { q:"Which good is most likely to have INELASTIC demand?", opts:["Luxury handbags","Insulin for diabetics","Foreign holidays","Designer clothes"], c:1, fb:"Insulin is a necessity with no substitutes for diabetics. Demand is very inelastic — people must buy it regardless of price." },
    { q:"Can businesses always pass cost increases on to consumers through higher prices?", opts:["Yes, always","Only if demand is inelastic","Only if demand is elastic","Never"], c:1, fb:"When demand is inelastic, consumers are not very price-sensitive, so firms can raise prices without losing many customers. With elastic demand, higher prices drive customers away." },
  ],
  ec7: [
    { q:"Which of the following is a fixed cost for a bakery?", opts:["Flour and sugar","Electricity used per loaf","Monthly rent on the building","Wages for part-time staff"], c:2, fb:"Rent does not change with the number of loaves produced — it is a fixed cost. Ingredients and variable labour are variable costs." },
    { q:"The profit-maximising level of output is where:", opts:["Total Revenue is maximised","Average Total Cost is minimised","Marginal Revenue equals Marginal Cost","Fixed costs are recovered"], c:2, fb:"The golden rule: produce where MR = MC. This applies to all market structures — it maximises economic profit (or minimises loss)." },
    { q:"Economies of scale occur when:", opts:["Output rises and average total cost rises","Output rises and average total cost falls","Output falls and total cost falls","Fixed costs increase with output"], c:1, fb:"Economies of scale: as the firm expands production (long run), the average cost per unit falls. Larger scale = more efficient production." },
  ],
  ec8: [
    { q:"In a perfectly competitive market, each firm is a:", opts:["Price maker","Price taker","Monopolist","Oligopolist"], c:1, fb:"Perfectly competitive firms are price takers — they have no market power and must accept the market price as given." },
    { q:"A firm should shut down in the short run when:", opts:["Price falls below ATC","Price falls below AVC","Economic profit is zero","MR exceeds MC"], c:1, fb:"Shut down when P < AVC. If the firm cannot cover its variable costs, it loses less by shutting down than by continuing to operate." },
    { q:"In long-run equilibrium in perfect competition, economic profit equals:", opts:["Maximum possible profit","The same as accounting profit","Zero","Negative"], c:2, fb:"Free entry and exit drives economic profit to zero in the long run. Firms earn normal profit — just enough to stay in the industry." },
  ],
  ec9: [
    { q:"A monopolist maximises profit by producing where:", opts:["P = MC","MR = MC","TR is maximised","ATC is minimised"], c:1, fb:"Like all firms, a monopolist maximises profit where MR = MC. Unlike perfect competition, the monopolist then sets P > MC from the demand curve." },
    { q:"Deadweight loss in a monopoly represents:", opts:["The monopolist's profit","Lost economic efficiency due to underproduction","Government tax revenue lost","The cost of barriers to entry"], c:1, fb:"Deadweight loss is the reduction in total welfare when a monopolist produces below the socially optimal quantity and charges a higher price than MC." },
    { q:"Which of the following is a barrier to entry that creates a monopoly?", opts:["Many competing firms","Perfectly elastic demand","Patent protection giving exclusive rights","Zero fixed costs"], c:2, fb:"Patents grant a firm the exclusive legal right to produce a product for a set period, preventing competition and creating a monopoly." },
  ],
  ec10: [
    { q:"Which market structure is characterised by a few large firms with high barriers to entry?", opts:["Perfect competition","Monopolistic competition","Oligopoly","Monopsony"], c:2, fb:"Oligopoly = few dominant firms, high barriers to entry, and strategic interdependence — each firm's decisions affect others." },
    { q:"In the Prisoner's Dilemma, both prisoners confess because:", opts:["They trust each other","Confessing is the dominant strategy regardless of what the other does","They are forced to confess","They have perfect information"], c:1, fb:"Confessing is a dominant strategy — it gives a better outcome regardless of what the other prisoner does. This leads to a suboptimal collective outcome." },
    { q:"The four-firm concentration ratio of 80% suggests the industry is:", opts:["Perfectly competitive","A natural monopoly","An oligopoly with high concentration","Monopolistically competitive"], c:2, fb:"A four-firm concentration ratio of 80% means the top 4 firms control 80% of the market — a highly concentrated oligopoly." },
  ],
  ec12: [
    { q:"A factory emits pollution that damages nearby residents. This is an example of:", opts:["A positive externality","A public good","A negative externality","Perfect competition"], c:2, fb:"Pollution imposes costs on third parties (residents) not involved in the transaction — a classic negative externality (market failure)." },
    { q:"Because of negative externalities, free markets tend to:", opts:["Underproduce the good","Produce the socially optimal quantity","Overproduce the good","Produce zero output"], c:2, fb:"Firms only consider private costs, ignoring social costs. This leads to overproduction — output exceeds the socially optimal level." },
    { q:"A Pigouvian tax is designed to:", opts:["Raise government revenue only","Subsidise green energy","Make producers internalise external costs by raising their private cost","Eliminate all pollution"], c:2, fb:"A Pigouvian tax equal to the external cost shifts the supply curve up, reducing output to the social optimum where MSC = MSB." },
  ],
  ec13: [
    { q:"A positive externality leads to:", opts:["Overproduction by the market","Underproduction by the market","The socially optimal output","A surplus in the market"], c:1, fb:"With positive externalities, the social benefit exceeds the private benefit. The market underproduces because firms/consumers ignore the benefit to others." },
    { q:"Which of the following is a public good?", opts:["A burger from a fast-food restaurant","A Netflix subscription","National defence","A concert ticket"], c:2, fb:"National defence is non-excludable (can't prevent anyone benefiting) and non-rival (one person's protection doesn't reduce another's). It's the classic public good." },
    { q:"The free-rider problem explains why:", opts:["Private markets overproduce public goods","Private markets underproduce public goods","Governments always provide public goods efficiently","Consumers always pay their fair share"], c:1, fb:"Free-riders benefit from public goods without paying. Since firms can't exclude non-payers, they can't profit, so private markets provide too little — government must step in." },
  ],
};

// ─────────────────────────────────────────────
// FILL-IN-THE-BLANK EXERCISES
// ─────────────────────────────────────────────
var ECON_FILL_EXERCISES = {
  ec1: {
    sentence: 'Economics studies how people make choices under [scarcity]. A graph showing maximum production combinations is the [PPF]. A point inside the PPF indicates productive [inefficiency].',
    blanks: [
      { id:'efb-ec1-1', answers:['scarcity'] },
      { id:'efb-ec1-2', answers:['ppf','production possibilities frontier','production possibility frontier'] },
      { id:'efb-ec1-3', answers:['inefficiency'] },
    ],
  },
  ec2: {
    sentence: 'The value of the next best alternative given up is called [opportunity cost]. A line showing all affordable combinations of two goods is a [budget constraint]. The ability to produce at a lower opportunity cost gives a [comparative advantage].',
    blanks: [
      { id:'efb-ec2-1', answers:['opportunity cost'] },
      { id:'efb-ec2-2', answers:['budget constraint'] },
      { id:'efb-ec2-3', answers:['comparative advantage'] },
    ],
  },
  ec3: {
    sentence: 'The law of [demand] states that price and quantity demanded move in opposite directions. When price is above equilibrium, a [surplus] exists. Butter and margarine are [substitutes] because they can replace each other.',
    blanks: [
      { id:'efb-ec3-1', answers:['demand'] },
      { id:'efb-ec3-2', answers:['surplus','excess supply'] },
      { id:'efb-ec3-3', answers:['substitutes','substitute goods'] },
    ],
  },
  ec5: {
    sentence: 'Price elasticity of demand measures how [responsive] quantity demanded is to a price change. When PED > 1, demand is [elastic]. A good with no substitutes and few alternatives will tend to have [inelastic] demand.',
    blanks: [
      { id:'efb-ec5-1', answers:['responsive','sensitive'] },
      { id:'efb-ec5-2', answers:['elastic'] },
      { id:'efb-ec5-3', answers:['inelastic'] },
    ],
  },
  ec7: {
    sentence: 'Costs that do not change with output are [fixed costs]. The extra cost of producing one more unit is [marginal cost]. When long-run average costs fall as output rises, a firm experiences [economies of scale].',
    blanks: [
      { id:'efb-ec7-1', answers:['fixed costs','fixed'] },
      { id:'efb-ec7-2', answers:['marginal cost'] },
      { id:'efb-ec7-3', answers:['economies of scale'] },
    ],
  },
  ec8: {
    sentence: 'In perfect competition, firms are [price takers]. The profit-maximising rule is to produce where MR equals [MC]. In the long run, economic profit in a perfectly competitive market equals [zero].',
    blanks: [
      { id:'efb-ec8-1', answers:['price takers','price taker'] },
      { id:'efb-ec8-2', answers:['mc','marginal cost'] },
      { id:'efb-ec8-3', answers:['zero','0'] },
    ],
  },
  ec9: {
    sentence: 'A [monopoly] has a single seller with no close substitutes. A monopolist sets price [above] marginal cost. The loss of efficiency from monopoly underproduction is called [deadweight loss].',
    blanks: [
      { id:'efb-ec9-1', answers:['monopoly'] },
      { id:'efb-ec9-2', answers:['above'] },
      { id:'efb-ec9-3', answers:['deadweight loss'] },
    ],
  },
  ec10: {
    sentence: 'A market dominated by a few large firms is an [oligopoly]. When firms secretly agree to fix prices, this is called [collusion]. The [four-firm concentration ratio] measures the combined market share of the top four firms.',
    blanks: [
      { id:'efb-ec10-1', answers:['oligopoly'] },
      { id:'efb-ec10-2', answers:['collusion'] },
      { id:'efb-ec10-3', answers:['four-firm concentration ratio','concentration ratio'] },
    ],
  },
  ec12: {
    sentence: 'A [negative externality] is a cost imposed on third parties. Because of this, free markets [overproduce] relative to the social optimum. A tax equal to the external cost is called a [Pigouvian tax].',
    blanks: [
      { id:'efb-ec12-1', answers:['negative externality'] },
      { id:'efb-ec12-2', answers:['overproduce','over-produce'] },
      { id:'efb-ec12-3', answers:['pigouvian tax','pigovian tax'] },
    ],
  },
  ec13: {
    sentence: 'A [positive externality] causes markets to underproduce. A good that is non-excludable and non-rival is a [public good]. The [free-rider] problem explains why private markets fail to provide public goods.',
    blanks: [
      { id:'efb-ec13-1', answers:['positive externality'] },
      { id:'efb-ec13-2', answers:['public good'] },
      { id:'efb-ec13-3', answers:['free-rider','free rider'] },
    ],
  },
};

// ─────────────────────────────────────────────
// MATCHING EXERCISES
// ─────────────────────────────────────────────
var ECON_MATCH_EXERCISES = {
  ec1: { pairs:[
    { term:'Scarcity',         def:'Wants exceed available resources' },
    { term:'PPF',              def:'Max output combinations with full resource use' },
    { term:'Microeconomics',   def:'Studies individual decisions and markets' },
    { term:'Macroeconomics',   def:'Studies the economy as a whole' },
  ]},
  ec2: { pairs:[
    { term:'Opportunity cost',    def:'Value of the next best alternative given up' },
    { term:'Budget constraint',   def:'All affordable combinations given income and prices' },
    { term:'Comparative advantage',def:'Ability to produce at lower opportunity cost' },
    { term:'Diminishing marginal utility', def:'Extra satisfaction falls with each additional unit' },
  ]},
  ec3: { pairs:[
    { term:'Law of demand',    def:'Price up → quantity demanded down' },
    { term:'Law of supply',    def:'Price up → quantity supplied up' },
    { term:'Surplus',          def:'Quantity supplied exceeds quantity demanded' },
    { term:'Complements',      def:'Goods consumed together; price of one affects demand for other' },
  ]},
  ec5: { pairs:[
    { term:'Elastic demand',   def:'PED > 1; quantity very responsive to price' },
    { term:'Inelastic demand', def:'PED < 1; quantity not very responsive to price' },
    { term:'PED formula',      def:'% change in Qd ÷ % change in Price' },
    { term:'Income elasticity',def:'How Qd responds to a change in consumer income' },
  ]},
  ec7: { pairs:[
    { term:'Fixed cost',        def:'Does not change with output level' },
    { term:'Variable cost',     def:'Changes with the level of output' },
    { term:'Marginal cost',     def:'Extra cost of producing one more unit' },
    { term:'Economies of scale',def:'Average cost falls as output expands in long run' },
  ]},
  ec8: { pairs:[
    { term:'Price taker',         def:'Accepts market price; no power to influence it' },
    { term:'MR = MC rule',        def:'The profit-maximising output rule' },
    { term:'Shutdown point',      def:'P < AVC; firm stops producing in short run' },
    { term:'Long-run equilibrium',def:'Economic profit = 0 in perfect competition' },
  ]},
  ec9: { pairs:[
    { term:'Monopoly',           def:'Single seller, no close substitutes' },
    { term:'Deadweight loss',    def:'Efficiency loss from monopoly underproduction' },
    { term:'Barrier to entry',   def:'Prevents new firms from entering the market' },
    { term:'Price discrimination',def:'Charging different prices to different consumers' },
  ]},
  ec10: { pairs:[
    { term:'Oligopoly',             def:'Few large firms with high barriers to entry' },
    { term:'Collusion',             def:'Secret agreement to fix prices or limit output' },
    { term:"Prisoner's Dilemma",    def:'Self-interest leads to worse collective outcome' },
    { term:'Concentration ratio',   def:'Combined market share of the top firms' },
  ]},
  ec12: { pairs:[
    { term:'Negative externality', def:'Cost imposed on uninvolved third parties' },
    { term:'Overproduction',       def:'Market outcome with negative externalities' },
    { term:'Pigouvian tax',        def:'Tax equal to external cost to fix market failure' },
    { term:'Social optimum',       def:'Output where MSC = MSB' },
  ]},
  ec13: { pairs:[
    { term:'Positive externality', def:'Benefit enjoyed by uninvolved third parties' },
    { term:'Public good',          def:'Non-excludable and non-rival good' },
    { term:'Free-rider problem',   def:'Benefiting without paying; causes underprovision' },
    { term:'Subsidy',              def:'Government payment to encourage more production' },
  ]},
};

// ─────────────────────────────────────────────
// MOCK EXAM A — 20 questions
// ─────────────────────────────────────────────
var ECON_EXAM_A = [
  { ch:'Ch.1', q:"Economics is best described as the study of:", opts:["How governments manage national debt","How people make choices given scarce resources","How firms maximise revenue","How prices are set by central banks"], c:1, fb:"Economics studies the allocation of scarce resources to satisfy unlimited wants — it applies to individuals, firms, and governments." },
  { ch:'Ch.1', q:"A point OUTSIDE the Production Possibilities Frontier is:", opts:["Productively efficient","Currently unattainable with existing resources","Productively inefficient","The ideal production point"], c:1, fb:"Points outside the PPF are unattainable with current resources and technology. The economy cannot produce that combination." },
  { ch:'Ch.2', q:"If you choose to study instead of going to a concert, the opportunity cost is:", opts:["The tuition fees you paid","The value you would have got from the concert","The cost of your textbooks","Zero, because studying is free"], c:1, fb:"Opportunity cost = the value of the best alternative foregone. Here it is the enjoyment and value of attending the concert." },
  { ch:'Ch.2', q:"Comparative advantage is based on:", opts:["Absolute productivity","Lower opportunity cost","Larger labour force","More natural resources"], c:1, fb:"Comparative advantage means producing at a lower opportunity cost than others — it is the basis for specialisation and mutually beneficial trade." },
  { ch:'Ch.3', q:"Which event causes the demand curve for tea to SHIFT RIGHT?", opts:["A fall in the price of tea","A rise in the price of coffee (a substitute for tea)","A fall in consumer incomes (tea is a normal good)","A decrease in the number of tea drinkers"], c:1, fb:"When the price of coffee (a substitute) rises, consumers switch to tea. Demand for tea increases — the whole curve shifts right." },
  { ch:'Ch.3', q:"A shortage in a market means:", opts:["Price is above equilibrium","Quantity supplied exceeds quantity demanded","Price is below equilibrium and Qd > Qs","The market has reached equilibrium"], c:2, fb:"A shortage (excess demand) occurs when price is too low — quantity demanded exceeds quantity supplied, putting upward pressure on price." },
  { ch:'Ch.3', q:"Petrol and cars are complement goods. If the price of petrol rises sharply, what happens to demand for cars?", opts:["It increases","It stays the same","It decreases","It depends on income"], c:2, fb:"Complements are used together. Higher petrol prices make driving more expensive overall, so demand for cars falls — the demand curve shifts left." },
  { ch:'Ch.5', q:"PED = 0.4. This means demand is:", opts:["Elastic","Unit elastic","Inelastic","Perfectly elastic"], c:2, fb:"PED = 0.4 < 1, so demand is inelastic. A price change causes a proportionally smaller change in quantity demanded." },
  { ch:'Ch.5', q:"Which factor makes demand MORE elastic?", opts:["Few substitutes available","The good is a necessity","The good takes a large share of consumer income","Consumers have little time to adjust"], c:2, fb:"When a good takes a large share of income, consumers pay close attention to price and are more responsive to changes — making demand more elastic." },
  { ch:'Ch.7', q:"Which of the following is a VARIABLE cost?", opts:["Annual factory lease","Machinery purchase","Raw materials used in production","CEO salary"], c:2, fb:"Raw materials vary directly with the level of output — the more you produce, the more materials you use. It is a classic variable cost." },
  { ch:'Ch.7', q:"The MC curve crosses the ATC curve at:", opts:["The maximum point of ATC","The minimum point of ATC","Any point where ATC is rising","The point where AVC equals AFC"], c:1, fb:"When MC < ATC, ATC is falling; when MC > ATC, ATC is rising. So MC must cross ATC exactly at its minimum point." },
  { ch:'Ch.8', q:"In perfect competition, a firm's demand curve is:", opts:["Downward sloping","Upward sloping","Perfectly elastic (horizontal) at the market price","Perfectly inelastic (vertical)"], c:2, fb:"A perfectly competitive firm is a price taker — it can sell any quantity at the market price. Its demand curve is horizontal (perfectly elastic)." },
  { ch:'Ch.8', q:"A firm should shut down in the short run when:", opts:["Economic profit is negative","Price is below average total cost","Price is below average variable cost","Marginal cost exceeds marginal revenue"], c:2, fb:"Shut down when P < AVC. If revenue doesn't cover variable costs, the firm loses less by stopping production than by continuing." },
  { ch:'Ch.9', q:"For a monopolist, Marginal Revenue is less than price because:", opts:["The monopolist has no market power","To sell one more unit, the monopolist must lower price on ALL units","Monopolists always face inelastic demand","Fixed costs are too high"], c:1, fb:"A monopolist faces a downward-sloping demand curve — to sell more, it must cut price on every unit. The MR of an extra unit is therefore less than the price charged." },
  { ch:'Ch.9', q:"Which policy would most directly correct monopoly deadweight loss?", opts:["A production subsidy for the monopolist","Price regulation setting P = MC","Reducing corporation tax","Increasing import tariffs"], c:1, fb:"Regulating the monopolist to set P = MC forces output to the socially optimal level, eliminating deadweight loss (though the firm may need a subsidy if P < ATC)." },
  { ch:'Ch.10', q:"Monopolistic competition differs from perfect competition mainly because:", opts:["There are fewer buyers","Products are differentiated, giving firms some pricing power","There are no barriers to entry","Firms are price takers"], c:1, fb:"In monopolistic competition, firms sell differentiated products (different brands, quality, features), giving each firm a small degree of market power." },
  { ch:'Ch.10', q:"In the Prisoner's Dilemma, both players choose to confess because:", opts:["They cooperate to get the best outcome","Confessing is each player's dominant strategy","They trust each other","The payoff matrix forces cooperation"], c:1, fb:"Confessing dominates — it gives a better outcome regardless of what the other player does. Self-interest leads both to confess, producing a collectively worse outcome." },
  { ch:'Ch.12', q:"A steel factory dumps waste into a river, damaging downstream fishing communities. This is:", opts:["A positive externality","A public good problem","A negative externality","Productive inefficiency"], c:2, fb:"The pollution imposes costs (damaged fishing) on third parties not involved in the steel production transaction — a textbook negative externality." },
  { ch:'Ch.12', q:"Why do markets with negative externalities overproduce?", opts:["Firms consider all social costs","Firms only consider private costs, ignoring external costs","Consumers demand too little","The government intervenes too much"], c:1, fb:"Firms only count their own private costs. Because they ignore the external cost imposed on others, their supply is too high relative to the social optimum." },
  { ch:'Ch.13', q:"The free-rider problem arises because:", opts:["Public goods are too expensive to produce","People can benefit from a public good without paying for it","Governments always underfund services","Private firms overproduce public goods"], c:1, fb:"Public goods are non-excludable — you can't stop non-payers from enjoying them. So people free-ride, and private firms can't profit, leading to underprovision." },
];

// ─────────────────────────────────────────────
// MOCK EXAM B — 20 questions
// ─────────────────────────────────────────────
var ECON_EXAM_B = [
  { ch:'Ch.1', q:"Which of the following best illustrates scarcity?", opts:["A government with a budget surplus","A student choosing between studying and sleeping because time is limited","A firm with excess inventory","A market with no consumers"], c:1, fb:"Scarcity arises when resources (here: time) are limited relative to wants. The student must choose — they cannot do both simultaneously." },
  { ch:'Ch.1', q:"A technological improvement in an economy would most likely:", opts:["Shift the PPF inward","Move the economy from inside to on the PPF","Shift the PPF outward","Have no effect on the PPF"], c:2, fb:"Better technology means the economy can produce more with the same resources — the PPF shifts outward, expanding production possibilities." },
  { ch:'Ch.2', q:"A budget constraint shows:", opts:["The maximum utility a consumer can achieve","All combinations of two goods a consumer can afford given income and prices","Only what the consumer wants to buy","The firm's cost of production"], c:1, fb:"The budget constraint shows every combination of two goods the consumer can exactly afford — it is determined by income and the prices of both goods." },
  { ch:'Ch.2', q:"Country A can produce wine at an opportunity cost of 2 units of cheese per bottle, while Country B's opportunity cost is 3 units of cheese. Who has comparative advantage in wine?", opts:["Country B","Country A","Neither","Both equally"], c:1, fb:"Country A gives up only 2 units of cheese per bottle of wine vs Country B's 3. Country A has lower opportunity cost → comparative advantage in wine." },
  { ch:'Ch.3', q:"What causes a movement ALONG the supply curve (not a shift)?", opts:["A change in input costs","A change in technology","A change in the good's own price","A change in the number of suppliers"], c:2, fb:"Only a change in the good's own price causes a movement along the supply curve (a change in quantity supplied). Everything else shifts the curve." },
  { ch:'Ch.3', q:"If consumer incomes fall and bread is a normal good, the demand for bread will:", opts:["Increase (shift right)","Decrease (shift left)","Be unchanged","Become more elastic"], c:1, fb:"For a normal good, income and demand move in the same direction. Falling income → falling demand → demand curve shifts left." },
  { ch:'Ch.3', q:"Equilibrium price is the price at which:", opts:["The government sets prices","Quantity demanded equals quantity supplied","Firms maximise their profits","Supply exceeds demand"], c:1, fb:"Market equilibrium: the price where Qd = Qs. The market clears — no pressure for price to change, no surplus or shortage." },
  { ch:'Ch.5', q:"A 5% rise in price leads to a 5% fall in quantity demanded. Demand is:", opts:["Elastic","Inelastic","Unit elastic","Perfectly inelastic"], c:2, fb:"PED = 5% ÷ 5% = 1. When PED = 1, demand is unit elastic — percentage changes in price and quantity are equal." },
  { ch:'Ch.5', q:"If a firm faces inelastic demand and raises its price, total revenue will:", opts:["Fall","Stay the same","Rise","Cannot be determined"], c:2, fb:"With inelastic demand, the percentage fall in quantity demanded is less than the percentage rise in price, so total revenue (P × Q) increases." },
  { ch:'Ch.7', q:"Average Total Cost (ATC) equals:", opts:["MC × Q","TC ÷ Q","TR − TC","AFC × Q"], c:1, fb:"ATC = Total Cost ÷ Quantity produced. It is the cost per unit of output. Also equals AFC + AVC." },
  { ch:'Ch.7', q:"In the long run, all costs are:", opts:["Fixed","Variable","Sunk","Marginal"], c:1, fb:"In the long run, there are no fixed costs — the firm can adjust ALL inputs, including factory size and equipment. Everything becomes variable." },
  { ch:'Ch.8', q:"In long-run perfectly competitive equilibrium, which condition holds?", opts:["P > ATC","P = ATC = MC and economic profit = 0","MR > MC","Firms are earning supernormal profit"], c:1, fb:"Long-run PC equilibrium: P = MR = MC = ATC. Economic profit is zero — firms earn normal profit only, and there is no incentive to enter or exit." },
  { ch:'Ch.8', q:"Which characteristic is NOT found in perfect competition?", opts:["Many buyers and sellers","Homogeneous products","Barriers to entry preventing new firms","Perfect information"], c:2, fb:"Perfect competition has FREE entry and exit — the opposite of barriers to entry. High barriers are a feature of monopoly and oligopoly." },
  { ch:'Ch.9', q:"A natural monopoly arises because:", opts:["The government grants exclusive rights","One firm can supply the whole market at lower cost than multiple firms due to very high fixed costs","The product has no substitutes","Consumers prefer single suppliers"], c:1, fb:"Natural monopolies have very high fixed costs and economies of scale — average cost keeps falling, so one large firm is more efficient than many small ones." },
  { ch:'Ch.9', q:"Price discrimination allows a monopolist to:", opts:["Reduce deadweight loss by capturing consumer surplus","Produce at the socially optimal quantity automatically","Always maximise consumer welfare","Eliminate barriers to entry"], c:0, fb:"By charging each consumer closer to their maximum willingness to pay, a monopolist captures more consumer surplus as profit and may actually increase output, reducing some deadweight loss." },
  { ch:'Ch.10', q:"Monopolistic competition results in excess capacity in the long run because:", opts:["Firms produce at minimum ATC","Firms produce below the output level that minimises ATC","There are too many firms","Government sets output quotas"], c:1, fb:"In monopolistic competition, the demand curve is tangent to ATC to the left of its minimum — firms produce less than the cost-minimising output (excess capacity)." },
  { ch:'Ch.10', q:"When oligopolists collude successfully, they collectively behave like:", opts:["A perfectly competitive market","A monopoly","A monopolistically competitive market","Individual price takers"], c:1, fb:"Successful collusion means firms jointly restrict output and raise price to the monopoly level, splitting monopoly profit among themselves." },
  { ch:'Ch.12', q:"Command-and-control regulation to address negative externalities involves:", opts:["Taxing the polluter per unit of emissions","Directly setting limits or standards on pollution","Subsidising cleaner alternatives","Giving the polluter property rights"], c:1, fb:"Command-and-control regulation uses direct government rules — e.g. emission limits, technology requirements — to reduce the externality." },
  { ch:'Ch.13', q:"A vaccination programme creates positive externalities because:", opts:["Vaccines are expensive to produce","Vaccinated individuals also protect others who are unvaccinated (herd immunity)","Governments subsidise vaccines","Hospitals benefit financially"], c:1, fb:"When enough people are vaccinated, even unvaccinated people benefit from reduced disease spread — a positive externality (benefit to uninvolved third parties)." },
  { ch:'Ch.13', q:"Which policy is most appropriate for correcting underproduction due to a positive externality?", opts:["A per-unit tax on the good","Command-and-control output limits","A government subsidy to producers or consumers","Privatising the industry"], c:2, fb:"A subsidy lowers the cost to producers (or raises the benefit to consumers), increasing output toward the socially optimal level where MSB = MSC." },
];