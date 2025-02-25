export function successResponse(data: any, status: number = 200) {
    return Response.json({ success: true, data }, { status });
  }
  
  export function errorResponse(message: string, status: number = 500, error: any = null) {
    return Response.json({ success: false, message, error }, { status });
  }
  