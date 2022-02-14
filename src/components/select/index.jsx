/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/forbid-prop-types */
import PropType from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { CaretIcon } from '../../assets/svg';

function Select({
  items, defaultIndex = 0, onSelect = null, label = 'label',
}) {
  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const input = useRef();

  useEffect(() => {
    const fn = (e) => {
      if (visible) {
        if (input && input.current && !input.current.contains(e.target)) {
          setVisible(false);
        }
      }
    };
    window.addEventListener('click', fn);

    return () => {
      window.removeEventListener('click', fn);
    };
  }, [visible]);

  const toggle = () => setVisible((v) => !v);

  const selectIndex = (index) => {
    setSelectedIndex(index);
    setVisible(false);
    onSelect && onSelect(index);
  };
  return (
    <SelectWrapper className="slt-elem">
      <SelectInput ref={input} onClick={toggle} isShown={visible}>
        <label>{label}</label>
        {items[selectedIndex].toString()}
        <span><CaretIcon /></span>
      </SelectInput>
      {items && (
        <Dropdown show={visible}>
          {items.map((item, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div key={`slt-${item}`} role="menuitem" tabIndex={index} onClick={() => selectIndex(index)}>{item}</div>
          ))}
        </Dropdown>
      )}
    </SelectWrapper>
  );
}

Select.propTypes = {
  items: PropType.array.isRequired,
  defaultIndex: PropType.number,
  onSelect: PropType.func,
  label: PropType.string,
};

Select.defaultProps = {
  onSelect: null,
  label: 'label',
  defaultIndex: 0,
};

const SelectWrapper = styled.span`
  height: 39px;
  width: 160px;
  cursor: pointer;
  position: relative;
  background: white;
`;

const SelectInput = styled.div`
position: relative;
width: 100%;
height: 100%;
padding-left: 23px;
padding-right: 40px;
display: flex;
align-items: center;
border: 0.5px solid #C4C4C4;
border-radius: 2px;
color: #3F3F3F;
${'' /* z-index: 2; */}
text-transform: capitalize;

& > label {
    text-transform: capitalize;
    position: absolute;
    top: -6.5px;
    left: 23px;
    font-size: ${(props) => props.theme.font.small}px;
    color: ${(props) => props.theme.colors.placeholder};
    background: white;
    padding-inline: 3px;
  }

  & > span {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 38px;
    display: grid;
    place-items: center;
    transition: transform 300ms ease-in-out;
    ${({ isShown = false }) => isShown && 'transform: rotate(180deg)'};
  }`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  right: 0;
  border: 0.5px solid #C4C4C4;
  border-radius: 2px;
  background: white;
  transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
  transform: translateY(-10px);
  opacity: 0;
  visibility: hidden;
  ${({ show = false }) => show && `
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  `}
  z-index: 1;

  & > div {
    height: 39px;
    width: 100%;
    padding-inline: 23px;
    display: flex;
    align-items: center;
    text-transform: capitalize;

    &:focus, &:hover {
      background: #98989811;
    }

    &:focus {
      outline: none;
      border: 0.5px solid #C4C4C4;
    }
  }
`;

export default Select;
