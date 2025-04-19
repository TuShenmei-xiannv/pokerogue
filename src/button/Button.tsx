import classNames from 'classnames';
import type { ReactNode } from 'react';

type IButtonProps = {
  xl?: boolean;
  children: ReactNode;
  className?: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = classNames(
    'btn',
    {
      'btn-xl': props.xl,
      'btn-base': !props.xl,
    },
    props.className,
  );

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
