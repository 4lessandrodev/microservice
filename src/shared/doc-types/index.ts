import { ApiProperty } from '@nestjs/swagger';

export const apiDetails = `
<section>
  <h3>Sumário</h3>

  <h5>Atributos</h5>
  <p>Detalhes ...</p>
<section>
`;

export class ApiCheck {
  @ApiProperty({ default: 'ok' })
  status!: string;

  @ApiProperty({ default: new Date() })
  date!: Date;
}
