
void OnStart()
  {
  int i,n,fhandle;
  double gr[25];
  string str;
  
  n=ArraySize(gr);
  for(i=0;i<n;i++)
    {
    gr[i]=NormalizeDouble(MathSin(i*3*2*M_PI/n),4);
    }

  str=DoubleToString(gr[0],4);
  for(i=1;i<n;i++)
    {
    str+=","+DoubleToString(gr[i],4);
    }
  
  ResetLastError();
  fhandle=FileOpen("exdat.txt",FILE_WRITE|FILE_TXT|FILE_ANSI);
  if(fhandle<0){Print("File open failed, error ",GetLastError());return;}
  
  FileWriteString(fhandle,"dat1=["+str+"];\n");
  
  FileClose(fhandle);
  }
//+------------------------------------------------------------------+