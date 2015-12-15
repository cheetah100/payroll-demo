/*
pay period = per calendar month
gross income = annual salary / 12 months
income tax = based on the tax table provide below
net income = gross income - income tax
super = gross income x super rate

0 - $18,200     Nil
$18,201 - $37,000       19c for each $1 over $18,200
$37,001 - $80,000       $3,572 plus 32.5c for each $1 over $37,000
$80,001 - $180,000      $17,547 plus 37c for each $1 over $80,000
$180,001 and over       $54,547 plus 45c for each $1 over $180,000
*/

function getTaxRate(gross){
	tax_table = [
		{income:180000, base:54547, rate:45},
		{income:80000, base:17547, rate:37},
		{income:37000, base:3572, rate:32.5},
		{income:18200, base:0, rate:37},
		{income:0, base:0, rate:0}
	]

	for(var tax_rate in tax_table){
		if(gross>tax_rate.income){
			return tax_rate;
		}
	}
}

function getTax(gross){
	tax_rate = getTaxRate(gross);
	excess = gross - tax_rate.income;
	tax = (tax_rate.base/12) + (tax_rate.rate*excess);
	return tax;
}

gross_income = Math.round(salary/12);
income_tax = Math.round(getTax(gross_income));
net_income = Math.round(gross_income - income_tax);
super = Math.round(gross_income * (super_rate/100));


