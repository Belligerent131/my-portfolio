import {ReactComponent as CSharpIconImage} from './imgs/c-sharp.svg';
import {ReactComponent as ReactIconImage} from './imgs/react.svg';
import {ReactComponent as PgSqlIconImage} from './imgs/postgresql.svg';
import {ReactComponent as JavascriptIconImage} from './imgs/javascript.svg';
import {ReactComponent as PythonIconImage} from './imgs/python.svg';
import {ReactComponent as AngularIconImage} from './imgs/angularjs.svg';
import {ReactComponent as TypescriptIconImage} from './imgs/typescript.svg';
import {ReactComponent as DjangoIconImage} from './imgs/django.svg';
import {ReactComponent as FirebaseIconImage} from './imgs/firebase.svg';
import {ReactComponent as BootstrapIconImage} from './imgs/bootstrap.svg';
import {ReactComponent as ReduxIconImage} from './imgs/redux.svg';
import {ReactComponent as CppIconImage} from './imgs/cpp.svg';
import {ReactComponent as AzureIconImage} from './imgs/azure.svg';
import styled, {css} from 'styled-components';

const standardValues = css`
    width: 100px;
    height: 100px;
`;

export const CSharpIcon = styled(CSharpIconImage)`
    ${standardValues}
    fill: #0078d7;
`; 

export const ReactIcon = styled(ReactIconImage)`
    ${standardValues}
    fill: 79b6f2;
`;

export const PgSqlIcon = styled(PgSqlIconImage)`
    ${standardValues}
    fill: #336791;
`;

export const JavascriptIcon = styled(JavascriptIconImage)`
    ${standardValues}
    fill: #F0DB4F;
`;

export const PythonIcon = styled(PythonIconImage)`
    ${standardValues}
    fill: #FFE873;
`;

export const AngularIcon = styled(AngularIconImage)`
    ${standardValues}
    fill: #dd1b16;
`;

export const TypescriptIcon = styled(TypescriptIconImage)`
    ${standardValues}
    fill: #fff;
`;

export const DjangoIcon = styled(DjangoIconImage)`
    ${standardValues}
    fill: #0C4B33;
`;

export const FirebaseIcon = styled(FirebaseIconImage)`
    ${standardValues}
`;

export const BootstrapIcon = styled(BootstrapIconImage)`
    ${standardValues}
`;

export const ReduxIcon = styled(ReduxIconImage)`
    ${standardValues}
`;

export const CppIcon = styled(CppIconImage)`
    ${standardValues}
    fill: #353ad4;
`;

export const AzureIcon = styled(AzureIconImage)`
    ${standardValues}
    fill: #353ad4;
`;