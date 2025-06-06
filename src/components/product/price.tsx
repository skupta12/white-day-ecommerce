interface PriceProps {
  className?: string;
  amount: string;
  currencyCode: string;
  currencyCodeClassName?: string;
}

export const Price: React.FC<PriceProps & React.ComponentProps<"p">> = ({
  className,
  amount,
  currencyCode = "EUR",
  currencyCodeClassName,
}) => {
  return (
    <p suppressHydrationWarning={true} className={className}>
      {new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currencyCode,
        currencyDisplay: "narrowSymbol",
      }).format(parseFloat(amount.toString()))}
      <span className={currencyCodeClassName}>
        {" "}{currencyCode}
      </span>
    </p>
  );
};