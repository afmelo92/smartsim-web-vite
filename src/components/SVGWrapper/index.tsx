import { useDynamicSvgImport } from '../../hooks/useDynamicSvgImport';

import * as S from './styles';

interface IProps {
  iconName: string;
  wrapperStyle?: string;
  svgProp?: React.SVGProps<SVGSVGElement>;
}

function SVGWrapper(props: IProps) {
  const { iconName, wrapperStyle, svgProp } = props;
  const { loading, SvgIcon } = useDynamicSvgImport(iconName);

  return (
    <>
      {loading && <div className='rounded-full bg-slate-400 animate-pulse h-8 w-8'></div>}
      {SvgIcon && (
        <S.Wrapper className={wrapperStyle}>
          <SvgIcon {...svgProp} />
        </S.Wrapper>
      )}
    </>
  );
}

export default SVGWrapper;
