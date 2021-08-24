import styled from 'styled-components';

const InputStyled = styled.input`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
    padding: 12px 16px;
    outline: 0;
    border-radius: ${({ theme }) => theme.borderRadius};
    margin-bottom: 17px;
`;

export default InputStyled;
